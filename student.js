const student={
    name:'Masud Rana',
    id:44,
    mony:900,
    Mejor:'Mathematics',
    NonMejor:['physics','calculaus','economics'],
    bestFriend:{
        name:'Sakib Rana',
        Mejor:'Mathematics'
    },
    teckExam:function(){
        console.log(thi.name,'Last time this exam')
    },
    buyMony:function(bill){
        this.mony=this.mony-bill
        return this.mony
    }
}

const remainingMony2=student.buyMony(200)

const NonMejor=student.NonMejor[2]
console.log(NonMejor)
