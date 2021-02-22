import queue

def hotPotato(nameList,num):
    queue_data = queue.Queue()
    for i in range(len(nameList)):
        queue_data.put(nameList[i])
    while queue_data.qsize()>1:
        for j in range(num):
            queue_data.put(queue_data.get())
        
        eliminate = queue_data.get()
        print(eliminate,'를 뜨거운 감자 게임에서 퇴장시킵니다.')
        
    winner = queue_data.get()
    print('승자는',winner,'입니다')
  
nameList = ["jun", "jae", "star", "yeon"]    
hotPotato(nameList,7)