from matplotlib import pyplot as plt
import numpy as np

x=[1,2,3,4,5,6,7,8]
y=[3,7,2,5,8,2,5,2]

days=[1,2,3,4,5]
sleeping=[7,8,6,11,7]
eating=[2,3,4,3,2]
working=[7,8,7,2,2]
playing=[8,5,7,8,13]


slices=[7,2,2,13]
activies=['sleeping','eating','working','playing']
cols=['c','m','r','y']

plt.subplot(221)#Subplot->1)vertically divides the page,2)Horizontally divides the page,3)No of position 
plt.scatter(x,y,label="skitcat",color='r',s=25,marker="o")

plt.subplot(222)
plt.bar([1,3,5,7,9],[5,2,7,8,2],label="simple",color='b',width=0.5)
plt.bar([2,4,6,8,10],[2,5,6,3,7],label="simple",color='g',width=0.5)

plt.subplot(223)
plt.plot([],[],color='m', label="Sleeping",linewidth=5)
plt.plot([],[],color='c', label="Eating",linewidth=5)
plt.plot([],[],color='r', label="Working",linewidth=5)
plt.plot([],[],color='k', label="Playing",linewidth=5)
plt.stackplot(days,sleeping,eating,working,playing,colors=['m','c','r','k'])


plt.subplot(224)
plt.pie(slices,
        labels=activies,
        colors=cols,
        startangle=90,
        shadow=True,
        explode=(0,0.2,0,0), #pull out a slice
        autopct='%1.1f%%'
        )

plt.show()
