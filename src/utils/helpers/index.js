


const englishNumbers = ['0','1','2','3','4','5','6','7','8','9']
const persianNumbers = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹']



export const handleNumberToPersian =(en)=>{
    // en -> english number
    
    const list = Array.from(en)

    const persianList =  list.map(item=>{
        
        return persianNumbers[englishNumbers.indexOf(item)]

    })

    const result = persianList.join('');
    console.log(result)

    return result

}
 