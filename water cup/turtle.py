import turtle
turtle.bgcolor("black")
squary=turtle.Turtle()
squary.speed(200)
for i in range(400):
    for color in ["red","blue","Yellow"]:
        squary.pencolor(color)
        squary.forward(i)
        squary.left(60)
        squary.right(100)