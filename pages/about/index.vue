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

    <section v-else class="flex flex-col m-8 select-none">
        <div
            v-for="content in textAbout"
            :key="content.id"
            class="flex flex-col gap-5"
        >
            <h1 class="uppercase font-bold text-2xl text-gray-700">
                {{ content.label }}
            </h1>
            <span class="text-gray-700 text-justify leading-relaxed">
                {{ content.text }}
            </span>

            <NuxtImg
                :src="content.url_img"
                alt="Imagem de {{ content.label }}"
                :class="content.border_class"
            />
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

    const textAbout = ref([
        {
            id: 0,
            label: 'Giselle Rodrigues',
            text: 'A inquietação e o gosto pela diversidade não se tornaram uma marca do trabalho Giselle Rodrigues por acaso. Paraense criada em Roraima, a coreógrafa iniciou-se na dança como bailarina da Escola de Dança Cristina Rocha no início do anos 2000, grupo que marcou época em Boa Vista. Em 2015, deu início aquela que seria a principal vertente de sua carreira nos dez anos subsequentes: diretora de movimento – ex-pressão especialmente cunhada a ela por desenvolver uma filosofia de dança que não centraliza a expressão do movimento por simples repetições e, principalmente, aplicadas a diversas danças. O que sublinhou a relevância de seu trabalho no resultado final de quase uma dezena de espetáculos de dança com que colaborou neste período. A rubrica, que acabaria se incorporando ao jargão cênico, aplica-se também, e com precisão em seus atuais trabalhos, onde desenvolve a dança em grandes assuntos de crítica social, utilizando músicas nacionais e internacionais.',
            url_img: '/img/img-cia-gisa-perfil.jpeg',
            border_class: 'm-10 rounded-md'
        },
        {
            id: 1,
            label: 'CMG',
            text: 'O Centro de Movimento Giselle Rodrigues afirma sua filosofia que, através do movimento, o ser humano desenvolve seu corpo, sua inteligência, confiança, habilidade de se comunicar e expressar. Uma escola com várias técnicas de movimento e foco na integração da dança com o universo das artes em geral; conhecimento fundamental para a formação de um corpo inteligente e de uma movimentação criativa. Nosso intuito é proporcionar o encontro de pessoas que se relacionam com a dança através da arte, saúde e lazer. Atendemos crianças, adolescentes e adultos, profissionais ou iniciantes.',
            url_img: '/img/img-cia-logo.jpeg',
            border_class: 'm-10 rounded-full'
        }
    ])
</script>
