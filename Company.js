export default class Company {
    findByFinalReceivingUser(finalReceivingUser,withChannel, boolean, novoCampo){
        if(novoCampo == null)  throw new Error('Oooops!')
        console.log(finalReceivingUser, withChannel, boolean, novoCampo)
    }
}