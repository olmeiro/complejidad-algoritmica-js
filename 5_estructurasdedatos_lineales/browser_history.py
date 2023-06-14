# Historial de un Navegador

# Tienes un navegador de una pestaña donde empiezas en la página de inicio y puedes visitar otra url, retroceder en el historial número de pasos o avanzar en el historial número de pasos.

# Implementa la clase BrowserHistory:

# BrowserHistory(string homepage): inicializa el objeto con la página de inicio del navegador.
# void visit(string url): visita la url de la página actual. Borra todo el historial de avance.
# string back(int steps): mueve los pasos hacia atrás en el historial. Si sólo puede devolver x pasos en el historial y pasos > x, devolverá sólo x pasos. Devuelve la url actual después de retroceder como máximo pasos en el historial.
# string forward(int steps): mover pasos hacia adelante en el historial. Si sólo puede avanzar x pasos en el historial y pasos > x, avanzará sólo x pasos. Devuelve la url actual después de avanzar en el historial como máximo pasos.

class BrowserHistory:
   def __init__(self, homepage: str):
       self.home = homepage
       self.main = []
       self.temporal = []

   def visit(self, url: str) -> None:
       self.main.append(url)
       if self.temporal:
           self.temporal.clear()

   def back(self, pasos: int) -> str:
       while (self.main and pasos):
           pasos -= 1
           x = self.main.pop()
           self.temporal.append(x)
       if self.main:
           return self.main[-1]
       return self.home

   def forward(self, pasos: int) -> str:
       while (self.temporal and pasos):
           pasos -= 1
           x = self.temporal.pop()
           self.main.append(x)
       if self.main:
           return self.main[-1]
       return self.home

""" Here is the explanation for the code above:
1. First, we create the class with its constructor, which receives a string with the homepage of our browser.
2. Then, we create the visit method, which will allow us to visit the url of the current page. This method will delete the forward history.
3. After that, we create the back method, which will move back in the history. If we can only go back x steps and steps > x, it will return only x steps. It will return the current url after moving back as many steps as possible.
4. Finally, we create the forward method, which will move forward in the history. If we can only go forward x steps and steps > x, it will return only x steps. It will return the current url after moving forward as many steps as possible.

Example:"""
browser = BrowserHistory("google.com")
browser.visit("facebook.com")
browser.visit("youtube.com")
browser.back(1)
browser.forward(1)
browser.visit("linkedin.com")
browser.forward(2)
browser.back(2)
browser.forward(7)
browser.back(7)
browser.visit("google.com")
browser.back(1)
browser.visit("facebook.com")
browser.visit("youtube.com")
browser.visit("linkedin.com")
browser.back(1)
browser.back(1)
browser.back(1)
browser.back(1)
browser.visit("google.com")
browser.visit("facebook.com")
browser.visit("youtube.com")
browser.visit("linkedin.com")
browser.back(1)
browser.back(1)
browser.back(1)
browser.back(1)
browser.visit("google.com")
browser.visit("facebook.com")
browser.visit("youtube.com")
browser.visit("linkedin.com")
browser.back(1)
browser.back(1)
browser.back(1)
browser.back(1)
browser.visit("google.com")
browser.visit("facebook.com")
browser.visit("youtube.com")
browser.visit("linkedin.com")
browser.back(1)
browser.back(1)
browser.back(1)
browser.back(1)
browser.visit("google.com")
browser.visit("facebook.com")
browser.visit("youtube.com")
browser.visit("linkedin.com")
browser.back(1)
browser.back(1)
browser.back(1)
browser.back(1)
browser.visit("google.com")
browser.visit("facebook.com")
browser.visit("youtube.com")
browser.visit("linkedin.com")
browser.back(1)
browser.back(1)
browser.back(1)
browser.back(1) 
browser.visit("google.com")
print(browser.back(1))
print(browser.forward(1))
print(browser.forward(1))
print(browser.back(1))
print(browser.back(1))
print(browser.back(1))