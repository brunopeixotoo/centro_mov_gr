<template>

    <div v-if="isLoading">
        <div class="flex justify-center items-center m-20">
            <h1 class="font-semibold text-gray-500"> Carregando...</h1>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-40 w-8 text-rose-500"
                viewBox="0 0 30 30"
            >
                <path 
                    fill="currentColor" 
                    d="M12.78 11.97C12.27 8.54 10.86 2 7.53 2S2.8 8.54 2.28 11.97c-.21 1.45-.28 2.92-.12 4.38c.34 3.04 1.39 4.49 2.11 5.15c.37.33.84.5 1.33.5h3.87c.49 0 .96-.17 1.33-.5c.7-.66 1.75-2.11 2.11-5.15c.17-1.46.09-2.93-.13-4.38M7.53 4c.36-.13 1.06.73 1.74 2.31l-4.69 4.02C5.41 6.26 6.94 3.79 7.53 4m2.22 9H5.31a.96.96 0 0 1-.55-.19L10 8.33c.29 1.02.56 2.17.75 3.5c.09.61-.38 1.17-1 1.17m12.03-1.03C21.27 8.54 19.86 2 16.53 2c-1.49 0-2.59 1.32-3.4 3.08c.37.96.71 2.06 1 3.29l5.18 4.44c-.16.11-.34.19-.56.19h-3.83c.12 1.27.11 2.45-.03 3.59c-.27 2.28-.89 3.86-1.57 4.94c.36.31.81.47 1.28.47h3.87c.49 0 .96-.17 1.33-.5c.7-.66 1.75-2.11 2.11-5.15c.17-1.46.09-2.93-.13-4.38M14.8 6.31c.7-1.58 1.38-2.44 1.73-2.31c.6-.21 2.12 2.26 2.97 6.33z"
                />
            </svg>
        </div>
    </div>

    <section v-else>
        <NuxtImg
            src="/img/img-banner-school.jpeg" 
            class="w-full"
            alt="Imagem Cia"
        />
        <div class="flex flex-col mb-5">
            <div class="flex flex-row w-full overflow-hidden items-center">
                <div 
                    class="flex transition-transform duration-700"
                    :style="{ 
                        transform: `translateX(-${currentIndexTop * 100}%)` 
                    }"
                >
                    <NuxtImg 
                        v-for="image in imagesTop"
                        :key="image.id"
                        :src="image.url_image"
                        :alt="image.alt"
                        class="w-full flex-shrink-0 object-cover"
                    />
                </div>

                <button @click="prevSlide"
                    class="m-5 absolute -left-4  bg-gray-700 text-white p-2 rounded-full">
                    &#8592;
                </button>
                <button @click="nextSlide"
                    class="m-5 absolute -right-4  bg-gray-700 text-white p-2 rounded-full">
                    &#8594;
                </button>
            </div>
        </div>

        <div class="flex flex-col gap- drop-shadow-lg">
            <h1 class="text-justify m-10 font-semibold">
                {{ label }}
            </h1>
            <div class="flex flex-col">
                <div class="flex flex-row w-full overflow-hidden items-center">
                    <div 
                        class="flex transition-transform duration-700"
                        :style="{ 
                            transform: `translateX(-${currentIndexShow * 100}%)` 
                        }"
                    >
                        <NuxtImg 
                            v-for="image in imagesShow"
                            :key="image.id"
                            :src="image.url_image"
                            :alt="image.alt"
                            class="w-full flex-shrink-0 object-cover"
                        />
                    </div>

                    <button @click="prevSlideShow"
                        class="m-5 absolute -left-4  bg-gray-700 text-white p-2 rounded-full">
                        &#8592;
                    </button>
                    <button @click="nextSlideShow"
                        class="m-5 absolute -right-4  bg-gray-700 text-white p-2 rounded-full">
                        &#8594;
                    </button>
                </div>

                <NuxtLink 
                    :to="'/news'"
                    class="flex justify-center m-10 p-2 rounded-lg text-white bg-gray-600 solid cursor-pointer hover:bg-yellow-300"
                >
                    Saiba mais
                </NuxtLink>
            </div>
        </div>
    </section>
</template>


<script setup>

    const isLoading = ref(true)

    onMounted(() => {
        setTimeout(() => {
            isLoading.value = false
        }, 2000)
    })

    const imagesTop = ref([
        {
            id: 1,
            url_image: '/img/img-cia-teen.jpeg',
            alt: 'Imagem 2'
        },
        {
            id: 2,
            url_image: '/img/img-school-apresentation-kids.jpg',
            alt: 'Imagem 3'
        },
        {
            id: 3,
            url_image: '/img/img-show-kids-teachers.jpeg',
            alt: 'Imagem 4'
        },
        {
            id: 4,
            url_image: '/img/img-show-school.jpeg',
            alt: 'Imagem 4'
        },
    ]);


    const currentIndexTop = ref(0);

    const nextSlide = () => {
        currentIndexTop.value = (currentIndexTop.value + 1) % imagesTop.value.length;
    };

    const prevSlide = () => {
        currentIndexTop.value = (currentIndexTop.value - 1 + imagesTop.value.length) % imagesTop.value.length;
    };

    const goToSlide = (index) => {
        currentIndexTop.value = index;
    };



    const label = ref('🎄✨ Um Encanto de Natal chega para emocionar a todos! Prepare-se para uma noite mágica, cheia de música, dança e surpresas que vão aquecer o seu coração. Venha celebrar o espírito natalino com a gente e viver um espetáculo inesquecível! 🎁🌟')

    const imagesShow = ref([
        {
            id: 0,
            url_image: '/img/img-news-natal-show-breve.jpeg',
            alt: 'Imagem 1',
        },
        {
            id: 1,
            url_image: '/img/img-news-natal-show-date.jpeg',
            alt: 'Imagem 2'
        },
        {
            id: 2,
            url_image: '/img/img-news-natal-show.jpeg',
            alt: 'Imagem 3'
        },
    ]);


    const currentIndexShow = ref(0);

    const nextSlideShow = () => {
        currentIndexShow.value = (currentIndexShow.value + 1) % imagesShow.value.length;
    };

    const prevSlideShow = () => {
        currentIndexShow.value = (currentIndexShow.value - 1 + imagesShow.value.length) % imagesShow.value.length;
    };

    const goToSlideShow = (index) => {
        currentIndexShow.value = index;
    };

</script>
