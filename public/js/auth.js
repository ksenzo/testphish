document.getElementById("sendBtn").addEventListener("click", async () => {

  const data = {
    username: document.getElementById("username").dataset.value,
    phone: document.getElementById("phone").dataset.value
  };

  console.log("Отправляем:", data);

  const res = await fetch("/api/saveData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  console.log("Ответ сервера:", result);
});