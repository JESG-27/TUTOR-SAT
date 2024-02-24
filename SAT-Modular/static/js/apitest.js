async function sendMessage(message) {
    try {
      const url = "https://chatbotsatsim.pythonanywhere.com/predict"; // Replace with your actual URL
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("Respuesta del chatbot:", data.answer);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }