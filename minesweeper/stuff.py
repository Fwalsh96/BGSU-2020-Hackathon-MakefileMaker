from tkinter import *

OPTIONS = [
"C",
"C++",
"C#",
"Python",
"Ruby",
"Java"
]

win = Tk()
win.title("Messenger RNA")
win.geometry('500x500')

variable = StringVar(win)
variable.set(OPTIONS[0]) # default value

w = OptionMenu(win, variable, *OPTIONS)
w.pack()

mainloop()