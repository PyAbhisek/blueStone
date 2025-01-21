const getImage = async () => {
    let loading = document.querySelector(".loader")
    try {
        let res = await fetch('https://picsum.photos/v2/list?page=1&limit=5')
        let info = await res.json()
        dispayImage(info)
        loading.style.display = 'none'
    }
    catch (error) {
        alert("error while fetching Info Please try again afte some time")
    }
}

const dispayImage = (info = []) => {
    const container = document.querySelector('.slider')
    const thumbnail = document.querySelector('.thumbnail')

    let thumbnailImg = document.createElement('img')
    thumbnailImg.src = info[0].download_url
    thumbnailImg.style.height = '100%'
    thumbnailImg.style.width = '100%'
    thumbnailImg.style.objectFit = 'cover'
    thumbnail.append(thumbnailImg)

    const all_image = info.map((url) => {
        const img = document.createElement('img')
        img.src = url.download_url
        img.height = 100
        img.width = 100
        img.style.objectFit = 'cover'
        img.style.cursor = 'pointer'
        img.addEventListener('click', () => {
            thumbnailImg.src = url.download_url
        })
        return (
            img
        )
    })
    container.append(...all_image)

    let currentIndex = 0
    let prevButton = document.querySelector('#prev')
    let nextButton = document.querySelector('#next')

    const sliderFunc = () => {
        container.scrollTo({
            left: currentIndex * (100 + 10),
            behavior:'smooth'
        })
    }
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--
            sliderFunc()
        }
    })

    nextButton.addEventListener('click', () => {
        if (currentIndex < info.length) {
            currentIndex++
            sliderFunc()
        }
    })
    
}
getImage()