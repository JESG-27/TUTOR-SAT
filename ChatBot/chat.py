import random
import json
import torch
from model import NeuralNet
from nltk_utils import bag_of_words, tokenize
import datetime

flag = True
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
with open('intents.json', 'r') as f:
    intents = json.load(f)

FILE = 'data.pth'
data = torch.load(FILE)

input_size = data['input_size']
hidden_size = data['hidden_size']
output_size = data['output_size']
all_words = data['all_words']
tags = data['tags']
model_state = data['model_state']

model = NeuralNet(input_size, hidden_size, output_size).to(device)
model.load_state_dict(model_state)
model.eval()

# Saludo segun la hora del dia
hour = datetime.datetime.now().hour
greeting = "Buenos dias" if hour>=12 and hour<18 else "Buenas tardes" if hour>=18 else "Buenas noches"

bot_name = 'Pablo'
print(f"{greeting}, ¡Comencemos!")
while flag:
    sentence = input("Tú: ")
    sentence = tokenize(sentence)
    X = bag_of_words(sentence, all_words)
    X = X.reshape(1, X.shape[0])
    X = torch.from_numpy(X).to(device)

    output = model(X)
    _, predicted = torch.max(output, dim=1)
    tag = tags[predicted.item()]

    probs = torch.softmax(output, dim=1)
    prob = probs[0][predicted.item()]

    if prob.item() > 0.75:
        for intent in intents['intents']:
            if tag == intent['tag']:
                print(f"{bot_name}: {random.choice(intent['responses'])}")
            if tag == "despedida":
                flag = False
    else:
        print(f"{bot_name}: Perdón, no te entiendo.")
