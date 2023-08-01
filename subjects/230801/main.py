import pandas as pd

csv_data = pd.read_csv('my_data.csv')

# Unnamed:0라고 표기되는 열을 지운다. 단 Unnamed:0라 쓰지말고 새롭게 컬럼 이름을 만들어서 지운다.
csv_data.rename( columns={'Unnamed: 0':'새롭게 컬럼 이름'}, inplace=True )

# 0,1,2,3,4로 보여지는 index 부분을 지운다.
csv_data.drop(columns=csv_data.columns[0], inplace=True)

name_dict = {
  'Alice': '앨리스',
  'Bob': '밥',
  'Charlie': '찰리',
  'james': '제임스'
}

# name에 해당되는 영문 이름을 한글로 바꾼다.
csv_data['name'] = csv_data['name'].apply(lambda x: name_dict.get(x))

# salary의 숫자를 천단위로 콤마를 찍어서 보여준다.
csv_data['salary'] = csv_data['salary'].map('{:,}'.format)

# csv_data 저장
csv_data.to_csv('result.csv', index=False, encoding='utf-8')