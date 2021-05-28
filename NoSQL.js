//������ ���̽� Ȯ�� 
show dbs

//config database ���� 
use config

//���� ���õ� DBȮ�� 
db

// ���� �÷��� Ȯ�� 
show collections

//DB�� �ڼ��� ���� Ȯ��
db.stats()

// ���� �÷����� ���� Ȯ��
use admin
db.collections

//�� DB: �����ͺ��̽� ���� ����� ���� 
use mydb
show dbs


//��α� ���񽺸� ����ٴ� ���� 
//����1:mydb �����ͺ��̽��� posts �÷��ǿ� title�� "First Post"�� ������ ����

db//���� DBȮ��

//insert
db.posts.insert({
        title: "First Post",
        createAt: new Date()
})

//�������� ������ insert
//	insertMany([������ �迭])
db.posts.insertMany([{
	title: "Learning MongoDB",
	content: "����DB�� �н��մϴ�",
	createAt: new Date(),
        hit:100
}, {
	title: "Python Programming",
	createAt: new Date(),
        hit: 10
},{	
	title: "Oracle Database",
	createAt:new Date(),
	hit: 30
}])

//������ ��ȸ 
db.posts.findOne()

//���� ��ü ��ȸ
db.posts.find()

//.save()
/*
	_id�� ���� ���� -> .insert �� ����
	_id�� �ִ� -> �÷��� ���� ���� ���� 
*/

// let post = db.posts.findOne()
post

//post�� createAt ���� 
post.createAt=new Date()
post
db.posts.save(post)

//_id�� ���� ������ save-> insert�� ���� 
post={
	title: "New Document",
	createAt: new Date(),
	hit:0
}

db.posts.save(post)


//.update({ ���湮���� ���� }, {$set: {������ ����}})
post=db.posts.findOne()
post

//content �ʵ带 update �ϰ�, modifiedAt �ʵ带 ���� 
db.posts.update (
	{"title": "First Post"},
	{$set: {content: "ù��° ����Ʈ", modifiedAt: new Date()
		}
	}
)
        
//Ȯ��
db.posts.findOne()
        
//update �� ���ǻ���: $set�����ڸ� ������� ������, ���� ��ü�� ���� 

//.remove():���� ���� 
db.posts.find()
        
//title�� New Document�� ���� ����
db.posts.remove({"title":"New Document"})

post=db.posts.find({"title":"First Post"})
db.posts.remove({"title":"First Post"})

//���ǿ��� 
/* 
����(==): {Ű:��}
ũ��(>): {Ű: {$gt: ��}}
ũ�ų� ����(>=): {Ű:{$gte:��}}
�۴�(<): {Ű:{$lt:��}}
�۰ų� ���� (<=): {Ű:{$lte:��}}
���� �ʴ� (!=): {Ű:{$ne:��}}
*/

//hit�� 10�� ������
db.posts.find({hit:10})

//hit�� 10�� �ƴ� ������ 
db.posts.find({hit:{$ne:10}})

//hit�� 50�̻��� ������
db.posts.find({hit:{$gte: 50}})

//$and, $or: �� ������ ���ǵ��� �迭�� ����
///���� �� hit���� 20~50 ������ ������ �˻�
db.posts.find({
        $and:[
                {hit:{$gte:20}}, {hit:{$lte:50}}]})
            
//���� �� hit���� 20�����̰ų� 50�̻��� ������ �˻� (or)
db.posts.find({$or:[{hit:{$lte:20}},{hit:{$gte:50}}]}) 

//��������
//find �޼����� �ι�° ��ü�� ��� �ʵ带 ���� 
// 1:���, 0: ��� ���� 

db.posts.find()

//post �÷��ǿ��� title, content, hit �ʵ常 ���
db.posts.find({},{"title":1, "content":1, "hit":1})


//����� ���� 
//	.skip: �ǳʶٱ�
//	.limit: ��� ����

//posts�÷��ǿ��� ��ü ���� ���, 
//title�� hit�ʵ�� ����ϰ� _id�� ������
//2�� �ǳ� �ٰ� 4���� ����غ��� 
db.posts.find({},{"title":1,"hit":1,"_id":0})
db.posts.find({},{"title":1,"hit":1,"_id":0}).limit(4).skip(2)

db.posts.find({},{"title":1,"hit":1})
db.posts.find({},{"title":1,"hit":1}).limit(4).skip(2)

//���� .sort
//���� ���� �ʵ�: 1(��������), -1(��������)
//hit �ʵ��� ������������ ���� 
db.posts.find({},{"title":1,"hit":1}).sort({"hit":1})//�������� 

//hit �ʵ��� ������������ ���� 
db.posts.find({},{"title":1,"hit":1}).sort({"hit":-1})//�������� 