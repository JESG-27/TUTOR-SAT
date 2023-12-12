from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
from google.oauth2 import service_account

SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
KEY = 'key.json'
SPREADSHEET_ID = '1wepFNE0w3-3AvFlEqgwDcw9XkZIoBLQGN6m1hzUJd-c'

creds = None
creds = service_account.Credentials.from_service_account_file(KEY, scopes=SCOPES)

service = build('sheets', 'v4', credentials=creds)
sheet = service.spreadsheets()

def questionInsert(mail, name, subject, question):
    try:
        values = [[mail, name, subject, question]]
        sheet.values().append(spreadsheetId=SPREADSHEET_ID,
                                        range='Preguntas Frecuentes!A1',
                                        valueInputOption='USER_ENTERED',
                                        body={'values':values}).execute()
    except Exception as e:
        print(e)