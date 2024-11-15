<template>
    <section>
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
                        class="w-full object-cover"
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

        <div class="flex flex-col gap-5 drop-shadow-lg">
            <h1 class="text-justify m-10 font-semibold">{{ label }}</h1>
            
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
                            class="w-full object-cover"
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
                    class="flex justify-center m-5 p-2 rounded-lg text-white bg-gray-600 underline decoration solid cursor-pointer hover:bg-yellow-300"
                >
                    Saiba mais
                </NuxtLink>
            </div>
        </div>
    </section>
</template>


<script setup>

    const imagesTop = ref([
        {
            id: 0,
            url_image: '/img/img-cia-alunos.jpeg',
            alt: 'Imagem 1'
        },
        {
            id: 1,
            url_image: '/img/img-cia-teen.jpeg',
            alt: 'Imagem 2'
        },
        {
            id: 2,
            url_image: '/img/img-school-apresentation-kids.jpg',
            alt: 'Imagem 3'
        }
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
