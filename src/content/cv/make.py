import os
pwd = os.getcwd()
cwd = pwd + '/src/content/cv'
dwd = cwd + '/data'

with open(cwd + '/layout.md', 'r') as f:
    data = f.read()
    
lines = []
for line in data.split('\n'):
    if line.startswith('[pyinclude]'):
        include = line.split('(')[1].split(')')[0]
        with open(dwd + '/' + include, 'r') as f:
            lines.append(f.read())
    else:
        lines.append(line)
        
with open(cwd + '/cv.md', 'w') as f:
    f.write('\n'.join(lines))