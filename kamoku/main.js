var getKamoku = function() {
    var keihi
    keihi=["接待交際費","会議費","消耗品費","給料手当","水道光熱費","仕入高","福利厚生費","研修費","貸倒引当金","売上高","雑収入","事業主貸"]
    
    var index = Math.floor(Math.random() * keihi.length)
    return keihi[index]
}
$(function(){
    $('#button').click(function(){
        // uranai(name,'ラッキーアイテムは',kamoku,'です')
        var kamoku = getKamoku()
        var name = $('#seiza').val()
        var message = name + 'さんの勘定科目は' + kamoku + 'です'
        $('#message').text(message)
        
    })
})