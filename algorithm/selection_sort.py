def pra_sort(arr):
    for stand in range(len(arr)-1):
        lowest = stand
        for index in range(stand+1,len(arr)):
            if arr[lowest]>arr[index]:
                lowest = index
        arr[lowest],arr[stand] = arr[stand],arr[lowest]
    return arr