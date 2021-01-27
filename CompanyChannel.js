import Company from './Company.js'

export default class CompanyChannel{

    constructor(){
        let company = new Company()

        company.findByFinalReceivingUser('mi','chel','son')
    }

}