var str = "I,Really,Like,Pizza"

function characterRemover(str, char){
    return str.split(char).join(" ")
}

characterRemover(str, ",")