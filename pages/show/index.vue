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

    <section v-else class="flex flex-col bg-yellow-300">
        <NuxtImg
            src="/img/img-show-school.jpeg"
        />
        <h1 class="uppercase font-bold text-2xl p-10">
            {{ labels.label1 }}
        </h1>

        <div v-for="item in dataShow"
            :key="item.id"
            class="flex flex-col gap-5 drop-shadow-lg"
        >
            <span class="font-semibold text-gray-900 text-lg px-10 mt-5">
                {{ item.label }}
            </span>


            <NuxtImg
                :src="item.url_img" 
                class="rounded-md mx-10"
            />

            <div class="bg-white p-6 text-justify mb-5 w-full">
                {{ item.description }}
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

    const labels = ref({
        label1: 'Espetáculos',
        label2: 'Descrição'
    })

    const dataShow = ref([
        {
            id: 0,
            label: 'Memórias, Caos & Amor (2024)',
            description: '"Memórias, Caos e Amor" é um espetáculo que entrelaça emoções e reflexões profundas sobre a complexidade das relações humanas. Com uma narrativa poética e intensa, a peça conduz o público por um labirinto de lembranças, desafios e afetos, explorando os impactos do passado no presente. Por meio de performances envolventes e uma atmosfera visual arrebatadora, a obra revela a beleza e o caos do amor em todas as suas formas.',
            url_img: '/img/img-show-memorias.jpeg',
        },
        {
            id: 1,
            label: 'Disney - Os Clássicos (2023)',
            description: 'O espetáculo de dança "Disney - Os Clássicos" é uma celebração encantadora das grandes animações da Disney, com coreografias emocionantes, figurinos coloridos e músicas icônicas. Dançarinos talentosos trazem à vida personagens como Aladdin, Elsa e Simba, criando uma experiência mágica para todas as idades.',
            url_img: '/img/img-show-disney.jpeg',
        },
        {
            id: 2,
            label: 'Fábrica de Sonhos (2023)',
            description: 'O espetáculo "Fábrica de Sonhos" convida o público a um mundo mágico onde os sonhos ganham vida. Com dançarinos vibrantes, figurinos deslumbrantes e cenários encantados, o show retrata uma fábrica secreta onde desejos são criados e espalhados pelo mundo. Cada coreografia revela a jornada da imaginação, convidando todos a acreditar na magia dos sonhos e na beleza de torná-los realidade.',
            url_img: '/img/img-show-fabrica.jpeg',
        },
        {
            id: 3,
            label: 'Estações (2022)',
            description: 'O espetáculo de dança inspirado nas estações do ano é uma celebração visual e poética da natureza. Com coreografias dinâmicas, cada ato retrata a beleza da primavera, o calor do verão, as cores do outono e a serenidade do inverno. Figuras e cenários encantadores transportam o público por um ciclo harmonioso de transformação, renovação e celebração da vida.',
            url_img: '/img/img-show-estacoes.jpeg',
        },
        {
            id: 4,
            label: 'Caos Dentro de Si (2021)',
            description: '"Caos Dentro de Si" é uma poderosa e intensa representação dos altos e baixos nos relacionamentos humanos. Através de coreografias emocionantes, a apresentação explora a dualidade do amor — do romance arrebatador aos tormentos dos relacionamentos abusivos. Com cenas que desafiam e provocam reflexão, o show também é uma homenagem à força e à resiliência das mulheres, destacando suas lutas e superações. Ao combinar movimento, música e emoção crua, "Caos" busca não apenas contar histórias, mas também trazer à tona a importância de quebrar ciclos tóxicos e encontrar força na própria liberdade.',
            url_img: '/img/img-show-caos.jpeg',
        },
    ])
</script>