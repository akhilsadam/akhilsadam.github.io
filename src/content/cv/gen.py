import os
import numpy as np
import pandas as pd
pwd = os.getcwd()
cwd = pwd + '/src/content/cv'
dwd = cwd + '/data'
# make publications
data = pd.read_csv(dwd + "/citations.csv", quotechar='"', skipinitialspace=True).to_numpy()

maxn = 5

author = data[:,0]
title = data[:,1]
journal = data[:,2]
year = data[:,6]
unpublished = np.array([isinstance(data[:,7][i], float) for i in range(len(data[:,7]))])

fauthor = np.array([np.where(np.array(a.split('; ')) == 'Sadam, Akhil')[0][0] != 0 for a in author])

ind = np.lexsort((unpublished,year,fauthor))
 
author = author[ind][:maxn]
title = title[ind][:maxn]
journal = journal[ind][:maxn]
year = year[ind][:maxn]

maxl=70
maxp=30

def getlast(l,maxa):
    counts = np.cumsum([len(a) for a in l])
    try:
        where = np.where(counts > maxa)[0][0]
    except:
        where = np.where(counts >= maxa)[0][0] - 1
    return l[:where]

def renameauthor(al):
    aq = al.split('; ')[:-1]
    out = ", ".join([f"{a.split(',')[1][1]} {a.split(',')[0]}" for a in aq])
    if len(out) > maxl:
        out = ", ".join(getlast(out.split(', '),maxl)) + "..."
    return out

def trim(out, maxql=maxl):
    if len(out) > maxql:
        out = " ".join(getlast(out.split(' '),maxql)) + "..."
    return out

# print(author, title, journal, year)
def format(i, a, t, j, y):
    return f"""
<div class="pub_{i}" id="pub" markdown="1">      
    <div class="cv_left_two">            
        <div class="pub_auth">
            {renameauthor(a)}
        </div>
        <div class="pub_title">
            {trim(t)}
        </div>
    </div>
    <div class="cv_right_two">            
        <span class="pub_journal">
            {trim(j, maxp)}
        </span>
        <span class="pub_year">
            {y}
        </span>
    </div>  
</div>
"""

out = "\n".join([format(i, a, t, j, y) for i, (a, t, j, y) in enumerate(zip(author, title, journal, year))])

out = f""" 
<div class="poster-section poster-scols avoid-break pubs-section" markdown="1">

# Recent Publications

{out}

</div>
"""
# A complete listing is available [here](https://scholar.google.com/citations?user=6G9FVRgAAAAJ).

with open(dwd + '/pubs.md', 'w') as f:
    f.write("<!---this file is generated from citations.csv -->\n")
    f.write(out)
    
#### make skills

def rpb(l):
    try:
        l = int(l)
    except:
        return ""
    return f"""
<span class="radial-bar"><radial-progress-bar 
	role="progressbar"
	aria-label="Arbitrary progress meter"
	style="--progress: {100-(20*l)}"
>
<div class="ring_ct" >
	<svg viewbox="0 0 100 100" class="image" style="stroke-dasharray:45 11.54;" >
			<circle class="ring track"></circle>
			<circle class="ring progress" pathLength="100"></circle>
	</svg>
</div>
<div class="label">{l}</div>
</radial-progress-bar>
</span>
"""

def make_rpb(lopt):
    return [rpb(l) for l in lopt]


data = pd.read_csv(dwd + "/skills.csv", quotechar='"', skipinitialspace=True).to_numpy()[:,:3]
types_unord, ord, ids = np.unique(data[:,0], return_index=True, return_inverse=True)
# reorder types using ord as paired sorting index (sort by first occurence)
ord = np.argsort(ord)
types = types_unord[ord]
types_noin = types.tolist()
types_noin.remove('Interests')

hash = {t:data[:,1][np.where(ids == i)] for i,t in enumerate(types_unord)}
hash2 = {t:data[:,2][np.where(ids == i)] for i,t in enumerate(types_unord)}

interests = hash['Interests'].tolist()

def skillformat(t, l,lopt):
    lopt = make_rpb(lopt)
    return f"""
<div class="skill_{t}" id="skill" markdown="1">
<div class="skill_title" markdown="1">
{t}
</div>
<div class="skill_list" markdown="1">
""" + "\n".join([f"<span>{s}{r}</span>" for s,r in zip(l,lopt)]) + """
</div>
</div>
"""

inner = "\n".join([skillformat(t, hash[t],hash2[t]) for t in types_noin])
inner2 = "\n".join([f'- {i}' for i in interests])
out = f"""

# <i class="fa fa-tasks" aria-hidden="true"></i> technical

""" + inner + """

<hr>

<div class="interests" markdown="1"> 

""" + inner2 + """

</div>
"""
with open(dwd + '/skills.md', 'w') as f:
    f.write("<!---this file is generated from skills.csv -->\n")
    f.write(out)
    
    
    
# make honors
honhead = """
<div class="poster-section poster-scols avoid-break hon-section" markdown="1">
"""
honhead2 = """

| Honors | Date | Rank | Topic /  Notes |
|--------|------|------|-------|
"""
honfoot = """
</div>
"""
data = pd.read_csv(dwd + "/honors.csv", quotechar='"', skipinitialspace=True, header=None).fillna(value="").to_numpy().astype(str)
opt = [int(a) > 0 for a in data[:,4]]
data = data[:,:4]

def honformat(d):
    return r"|".join(d) + r"|"

# get non optional:
datano = data[~np.array(opt)]


inner = [honhead2,'\n'.join([honformat(d) for d in datano]),]
inner.append('\n<div id="optional" markdown="1">\n')
inner.append('\n'+honhead2)
inner.append('\n'.join([honformat(d) for d in data[np.array(opt)]]))
inner.append("\n</div>\n")
inner = ''.join(inner)

honor = honhead + inner + honfoot
with open(dwd + '/hon.md', 'w') as f:
    f.write("<!---this file is generated from honors.csv -->\n")
    f.write(honor)