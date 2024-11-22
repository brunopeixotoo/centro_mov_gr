<template>
    <div class="flex flex-col m-8 select-none">
        <section
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
        </section>
    </div>
</template>

<script setup>

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
