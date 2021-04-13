Vue.component("messagel", {
    props: ["data"],
    template: `
            <ul class="message">
                <li style="flex-shrink: 0"><img :src="data['headImg']" alt=""></li>
                <li style="flex-shrink: 1"><p class="message_text">{{data["mes"]}}</p></li>
            </ul>`
})

Vue.component("messager", {
    props: ["data"],
    template: `
            <ul class="message">
                <li style="flex-shrink: 1"><p class="message_text">{{data["mes"]}}</p></li>
                <li style="flex-shrink: 0"><img :src="data['headImg']" alt=""></li>
            </ul>`
})

Vue.component("system", {
    props: ["data"],
    template: `
            <div class="system">
                {{data["mes"]}}
            </div>`
})

let app_communicate = new Vue({
    el: '#com',
    data: {
        datas: [],
        mescontent:{},
        to: "",
        isCommunicate: false
    },
    methods: {
        send: function () {
            var user = JSON.parse(session)
            headImg = user["headImg"]
            let question = $("#question").val()
            let t1 = {"mes": question, "from": ''+parent.id, "to": ""+this.mescontent["from"]["id"], "headImg": JSON.parse(session)["headImg"]}
            let t3 = JSON.stringify(t1)
            //发送消息
            webSocket.send(t3)
            this.datas.push({"headImg": headImg, "mes": question, "style": 'flex-end'})
            $("#question").val("")
            setTimeout(function () {
                $("#communicate").scrollTop(10000)
            }, 2)
        },
        closes: function () {
            this.isCommunicate = false
        }
    }
})

$(function () {
    // $("#send").click(function () {
    //     let question = $("#question").val()
    //     let t1 = {mes: question, from: parent.id, to: app_communicate.mescontent["from"]["id"], headImg: app_communicate.mescontent["from"]["headImg"]}
    //     let t3 = JSON.stringify(t1)
    //     app_communicate.datas.push({headImg: headImg, mes: question, style: 'flex-end'})
    //     console.log(app_communicate.datas)
    //     console.log(app_communicate.mescontent)
    //     $("#question").val("")
    //     setTimeout(function () {
    //         $("#communicate").scrollTop(10000)
    //     }, 2)
    // })
})