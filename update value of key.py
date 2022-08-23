students_dict = {
    "Ram": "Cricket",
    "Naresh": "Football",
    "Vani": "Tennis",
    "Rahim": "Cricket",
    "Deepak": "Boxing"
}

# Write your code here
str_dic = input().split()
students_dict[str_dic[0]] = str_dic[1]
print(students_dict)
