def enter_evaluation():
    while True:
        print("Please enter your rating from 1 to 5")
        point = input()
        if point.isdecimal():
            point = int(point)
            if point <= 0 or point > 5:
                print("Please enter from 1 to 5")
                point = input()
            else:
                print("Please enter your comment")
                comment = input()
                post = f"Point: {point} Comment: {comment}"
                file_pc = open("data.txt", "a")
                file_pc.write(f"{ post }\n")
                file_pc.close()
                break
        else:
            print("Please enter the evaluation points in numbers")

def check_results():
    print("Results so far")
    read_file = open("data.txt", "r")
    print(read_file.read())
    read_file.close()

while True:
    print("Please select the process you want to perform")
    print("1:Enter evaluation points and comments")
    print("2:Check the result so far")
    print("3:Finish")
    num = int(input())

    if num == 1:
        enter_evaluation()
    elif num == 2:
        check_results()
    elif num == 3:
        print("Will end")
        break
    else:
        print("Please enter from 1 to 3")