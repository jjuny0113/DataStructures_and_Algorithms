# hash_table = list([0 for i in range(8)])

# def get_key(data):
#     return hash(data)
  
  
# def hash_function(key):
#     return key % 8

# def save_data(data, value):
#     hash_address = hash_function(get_key(data))
#     hash_table[hash_address] = value
    
# def read_data(data):
#     hash_address = hash_function(get_key(data))
#     return hash_table[hash_address]
hash_table = list([0 for i in range(8)])

def get_key(data):
    return hash(data)

def hash_function(key):
    return key % 8

def save_data(data, value):
    index_key = get_key(data) # key도 저장하기 위해서
    hash_address = hash_function(index_key)
    print('abc')
    if hash_table[hash_address] != 0: # 데이터가 들어가 있다면
        for index in range(len(hash_table[hash_address])): # linked list 대신 list에 append사용 값이 2개 있는지 확인
            if hash_table[hash_address][index][0] == index_key:
                print('inin',hash_table[hash_address][index][0])
                print('nunadkla',hash_table[hash_address][index][1])
                hash_table[hash_address][index][1] = value
                return
        hash_table[hash_address].append([index_key, value])# 같은게 없다면
    else:
        hash_table[hash_address] = [[index_key, value]] # 데이터가 들어가 있지 않다면
        

print('hash',hash('da'))
print(save_data('da','chicken'))
print(save_data('da','asv'))
print(save_data('da','power'))


print('hashtabel',hash_table)