    const app = {
        data() {
            return {
                msg: 'Hello, Vue3',
                isshown: false,
                url: 'https://youtu.be/Dh6Cv7rIJTw?t=858'
            }
        },
        created(){
            console.log('Message is : ' + this.msg);
        },
        updated(){
            console.log('Message is changed to : ' + this.msg);
        }
    }
    Vue.createApp(app).mount('#app')

    const profileinformation = {
        data(){
            return{
                accountname:'Thanaphat Dararat',
                imagehref:'images/profile.png',
                positioninplace:'KMUTT student',
                numberofarticlewritten:0,
                numberoffollower:132,
                rating:7.1,
                linktoprofile:'https://www.facebook.com/thanaphat.dararat.54',
                linktochat:''
            }
        }
    }
    Vue.createApp(profileinformation).mount('#mainprofile')

    
    