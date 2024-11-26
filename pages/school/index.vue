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

    <section v-else class="flex flex-col">
        <NuxtImg
            :src="imgPageSchool.url_img1"
        />

        <div class="bg-yellow-300">
            <section class="flex flex-col gap-5 m-8">
                <span class="uppercase font-bold text-2xl text-black">
                    {{ labels.label1 }}
                </span>

                <span class="text-black text-justify leading-relaxed">
                    {{ textSchool.text1 }}
                </span>
            </section>
        </div>

        <NuxtImg
            :src="imgPageSchool.url_img2" 
            class="w-full"
        />

        <div class="bg-gray-700">
            <section class="flex flex-col gap-5 m-8">
                <span class="text-white text-justify leading-relaxed">
                    {{ textSchool.text2 }}
                </span>

                <div class="flex flex-row w-full overflow-hidden items-center mb-5">
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
                            class="w-full flex-shrink-0 object-cover rounded"
                        />
                    </div>

                    <button @click="prevSlideShow"
                        class="m-4 absolute -left-4  bg-gray-700 text-white p-2 rounded-full">
                        &#8592;
                    </button>
                    <button @click="nextSlideShow"
                        class="m-4 absolute -right-4  bg-gray-700 text-white p-2 rounded-full">
                        &#8594;
                    </button>
                </div>
            </section>
        </div>

        <div class="bg-yellow-300 drop-shadow-lg">
            <div class="flex m-20">
                <video 
                    controls 
                    autoplay="false"
                    loop
                >
                    <source
                        src="/public/video/video-show.mp4"
                        type="video/mp4"
                        @click="videoAction()"
                    />
                </video>
            </div>
        </div>

        <div class="bg-white">
            <section class="flex flex-col gap-10 m-8">
                <span class="uppercase font-bold text-2xl text-gray-700">
                    {{ labels.label2 }}
                </span>

                <div
                    v-for="data in dataOurTime"
                    :key="data.id"
                    class="flex flex-col items-center gap-5 mb-5 drop-shadow-lg"
                >
                    <NuxtImg
                        :src="data.url_img"
                        class="rounded-full size-48"
                    />

                    <div class="flex flex-col items-center">
                        <span class="font-bold text-lg text-gray-700">
                            {{ data.name_teacher }}
                        </span>
                        <span class="text-sm text-center">
                            {{ data.text_teacher }}
                        </span>
                    </div>
                </div>

            </section>
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

    const labels = ref({
        label1: 'Nosso ensino',
        label2: 'Nosso time',
    })

    const textSchool = ref({
        text1: 'Nosso ensino é baseado na metodologia russa da escola VAGANOVA. A partir dele, construímos um programade aulas e orientamos a nossa equipe através de reuniões periódicas. Ao longo do ano, uma programação intensa, para além das aulas, alimenta o prazer dos alunos pela dança epelas artes em geral: desde o convívio com o Centro de Movimento Giselle Rodrigues até a realização de Mostras e Aulas Públicas. Celebramos o encerramento do ano com a criação de um grande espetáculo apresentado em um teatro. Para os níveis adiantados oferecemos um curso pré-profissional, com aulas diárias, carga horária ampliada e um programa completo com alongamento, técnica de pontas, técnica clássica, preparação física e repertório.',
        text2: 'Para quem deseja se profissionalizar, incluímos em nossa metodologia o conhecimento do repertório da Companhia de Dança Giselle Rodrigues, criamos exercícios inspirados na bagagem artística da CIA a fim de fortalecer nosso elo com a nossa principal identidade artística, assim como, originar uma didática própria e contemporânea. Para isso, fazemos um trabalho de acompanhamento, para selecionar os alunos que mais se destacaram para estagiar na Companhia de Dança Giselle Rodrigues, ganhando assim uma imersão no universo profissional, assistindo a ensaios, conhecendo bastidores, coreografias, figurinos e tudo aquilo que envolve a preparação de um espetáculo de grande porte.',
    })

    const imgPageSchool = ref({
        url_img1: '/img/img-kids.jpeg',
        url_img2: '/img/img-cia-menu-kids.jpeg',
        url_img3: '/img/img-cia-alunos.jpeg',
    })


    const dataOurTime = ref([
        {
            id: 0,
            url_img: '/img/img-gisa-teacher.jpeg',
            name_teacher: 'Giselle Caroline Rodrigues da Silva',
            text_teacher: 'Diretora do CMG, professora de ballet infantil, juvenil, adulto e profissionalizante',
        },
        {
            id: 1,
            url_img: '/img/img-prof-dany.jpeg',
            name_teacher: 'Danny Queiroz',
            text_teacher: 'Assistente e professora de ballet infantil',
        },
        {
            id: 2,
            url_img: '/img/img-prof-nelly.jpeg',
            name_teacher: 'Nelly Reis',
            text_teacher: 'Dança do ventre',
        },
        {
            id: 3,
            url_img: '/img/img-prof-brenon.jpeg',
            name_teacher: 'Brenon Lee',
            text_teacher: 'Professor de dança ministerial e contemporâneo',
        },
        {
            id: 4,
            url_img: '/img/img-prof-helo.jpeg',
            name_teacher: 'Heloise Ribeiro Feitosa',
            text_teacher: 'Professora de ballet infantil e assistente',
        },
        {
            id: 5,
            url_img: '/img/img-prof-lari.jpeg',
            name_teacher: 'Larissa Paz',
            text_teacher: 'Professora de ballet infantil',
        },
        {
            id: 6,
            url_img: '/img/img-prof-ballet.jpeg',
            name_teacher: 'Nyamille Ferreira',
            text_teacher: 'Professora de ballet clássico infantil e juvenil',
        },
        {
            id: 7,
            url_img: '/img/img-prof-kpop.jpeg',
            name_teacher: 'Maria Lobo',
            text_teacher: 'Professora de K-pop',
        },
    ])


    const imagesShow = ref([
        {
            id: 0,
            url_image: '/img/img-cia-alunos.jpeg',
            alt: 'Imagem 1'
        },
        {
            id: 1,
            url_image: '/img/img-school-ballet-teen.jpeg',
            alt: 'Imagem 2'
        },
        {
            id: 2,
            url_image: '/img/img-cia-teen-teatro-2.jpg',
            alt: 'Imagem 3'
        },
        {
            id: 3,
            url_image: '/img/img-school-room-kids.jpg',
            alt: 'Imagem 3'
        },
        {
            id: 4,
            url_image: '/img/img-school-mothers.jpeg',
            alt: 'Imagem 3'
        },
    ]);

    const videoShow = ref({
        video: '/public/video/video-show.mp4'
    })
    
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