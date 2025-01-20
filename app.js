const getImage = async  ()=>{
    try{
        let res = await fetch('https://picsum.photos/v2/list?page=1&limit=5')
        let info = await res.json()
        // console.log(info)
        dispayImage(info)
    }
    catch(error){
        alert("error while fetching Info Please try again afte some time")
    }
}

const dispayImage = (info=[])=>{
    const container = document.querySelector('.slider')
    const thumbnail = document.querySelector('.thumbnail')

    let thumbnailImg = document.createElement('img')
    thumbnailImg.src = info[0].download_url
    thumbnailImg.style.height = '100%'
    thumbnailImg.style.width = '100%'
    thumbnailImg.style.objectFit = 'cover'
    thumbnail.append(thumbnailImg)

    const all_image = info.map((url,index)=>{
        const img = document.createElement('img')
        img.src = url.download_url
        img.height = 100
        img.width = 100
        img.style.objectFit = 'cover'
        
        img.addEventListener('click',()=>{
            thumbnailImg.src = url.download_url
        })
        return (
          img
        )
    })  
    container.append(...all_image)
}
getImage()