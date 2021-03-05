def pra_insertion_sort(arr):
    for index in range(len(arr) - 1):
        for index2 in range(index + 1, 0, -1):
            if arr[index2] < arr[index2 - 1]:
                arr[index2], arr[index2 - 1] = arr[index2 - 1], arr[index2]
            else:
                break
    return arr


arr = [10, 2, 8, 1]
pra_insertion_sort(arr)
