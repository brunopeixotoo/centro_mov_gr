<template>
    <section class="flex flex-col gap-10">
        <div class="bg-yellow-500">
            <NuxtImg
                src="/img/img-show-school.jpeg"
            />
            <h1 class="uppercase font-bold text-lg m-8">
                {{ labels.label1 }}
            </h1>

            <div v-for="item in dataShow"
                :key="item.id"
                class="flex flex-col gap-5 m-10"
            >
                <span
                    class="font-semibold text-gray-900 text-lg"
                > 
                    {{ item.label }} 
                </span>

                <NuxtImg
                    :src="item.url_img"
                    class="rounded"
                />

                <span class="text-justify mb-5"> 
                    {{ item.description }} 
                </span>
            </div>
        </div>
    </section>
</template>

<script setup>

    const labels = ref({
        label1: 'Espetáculos',
        label2: 'Descrição'
    })

    const dataShow = ref([
        {
            id: 0,
            label: 'Disney - Os Clássicos (2023)',
            description: 'O espetáculo de dança inspirado nos filmes da Disney é uma celebração encantadora dos clássicos, com coreografias emocionantes, figurinos coloridos e músicas icônicas. Dançarinos talentosos trazem à vida personagens como Aladdin, Elsa e Simba, criando uma experiência mágica para todas as idades.',
            url_img: '/img/img-show-disney.jpeg',
        },
        {
            id: 1,
            label: 'Fábrica de Sonhos (2023)',
            description: 'O espetáculo "Fábrica de Sonhos" convida o público a um mundo mágico onde os sonhos ganham vida. Com dançarinos vibrantes, figurinos deslumbrantes e cenários encantados, o show retrata uma fábrica secreta onde desejos são criados e espalhados pelo mundo. Cada coreografia revela a jornada da imaginação, convidando todos a acreditar na magia dos sonhos e na beleza de torná-los realidade.',
            url_img: '/img/img-show-fabrica.jpeg',
        },
        {
            id: 2,
            label: 'Estações (2022)',
            description: 'O espetáculo de dança inspirado nas estações do ano é uma celebração visual e poética da natureza. Com coreografias dinâmicas, cada ato retrata a beleza da primavera, o calor do verão, as cores do outono e a serenidade do inverno. Figuras e cenários encantadores transportam o público por um ciclo harmonioso de transformação, renovação e celebração da vida.',
            url_img: '/img/img-show-estacoes.jpeg',
        },
        {
            id: 3,
            label: 'Caos Dentro de Si (2021)',
            description: 'O espetáculo "Caos Dentro de Si" é uma poderosa e intensa representação dos altos e baixos nos relacionamentos humanos. Através de coreografias emocionantes, a apresentação explora a dualidade do amor — do romance arrebatador aos tormentos dos relacionamentos abusivos. Com cenas que desafiam e provocam reflexão, o show também é uma homenagem à força e à resiliência das mulheres, destacando suas lutas e superações. Ao combinar movimento, música e emoção crua, "Caos" busca não apenas contar histórias, mas também trazer à tona a importância de quebrar ciclos tóxicos e encontrar força na própria liberdade.',
            url_img: '/img/img-show-caos.jpeg',
        },
    ])
</script>