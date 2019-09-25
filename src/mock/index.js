//导入模拟数据的包
import Mock from "mockjs"

//通过Mock.mock() 来模拟API接口
Mock.mock('/api/goodslist','get',{
    status:200,
    message:'获取商品列表成功',
    "data|8":[
        {
            id:'@increment(1)',
            name:'@cword(2,8)',
            price:'@natural(5,2)',
            count:'@natural(100,999)',
            img:"@dataImage('200x100')"
        }
    ]
})
Mock.mock('/api/goodslist2','get',{
    status:200,
    message:'获取商品列表成功',
    "data|8":[
        {
            id:'@increment(1)',
            name:'@cword(2,8)',
            price:'@natural(5,2)',
            count:'@natural(100,999)',
            img:"@dataImage('200x100')"
        }
    ]
})