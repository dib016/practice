// var getstation = function(){
//     var station =$('蒲田駅').val()
// // htmlのidから駅の情報を出力
// }

// 駅名をekinameとして受け取って、残り駅数を返す関数
var getEkicount = function(ekiname) {
    var nokori =["蒲田駅","蓮沼駅","池上駅","千鳥町駅","久が原駅","御嶽山駅","雪が谷大塚駅","石川台駅","江原中延駅","旗の台駅","長原駅","洗足池駅","戸越銀座駅","大崎広小路駅","五反田駅"]
    return 14 - nokori.indexOf(ekiname)
}

$(function(){
        // htmlのidがpushをクリックしたときの宣言がfunction内にある
        $('#push').click(function(){  
        
            // var station = getstation()

        // HTML上の #train の value を取得して、ekinameに代入
        var ekiname =$('#train').val()

        // ekicountに残り駅数を代入
        var ekicount = getEkicount(ekiname)

        // 表示したいメッセージを組み立てる
        var message = ekiname + 'から五反田駅までは' + ekicount + '駅です'
        
        // 組み立てたメッセージを出力
        alert(message)
    })
})