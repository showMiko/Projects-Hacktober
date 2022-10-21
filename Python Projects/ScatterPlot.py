from matplotlib import pyplot as plt
x=[1,2,3,4,5,6,7,8]
y=[3,7,2,5,8,2,5,2]

x1=[0,8]
y1=[0,15]

plt.scatter(x,y,label="rangan",color='c',marker="o")
plt.plot(x1,y1)

plt.xlabel("X")
plt.xlabel("Y")
plt.title("Scatter Plot")
plt.legend()
plt.show()
