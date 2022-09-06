import random
qcount = 4
lst = random.sample(range(0, qcount), qcount)
ls = lst.copy()
print(lst, type(lst))
ls.append(3)
print(ls)

#  not able to manipulate random.sample list directly