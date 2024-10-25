<template>
    <div class="flex flex-col m-8">
        <section
            v-for="content in textAbout"
            :key="content.id"
            class="flex flex-col gap-5"
        >
            <h1 class="uppercase font-bold text-lg text-gray-700">
                {{ content.label }}
            </h1>
            <span class="text-gray-700 text-justify leading-relaxed">
                {{ content.text }}
            </span>
            <NuxtImg
                :src="content.url_img"
                alt="Imagem de {{ content.label }}"
                class="mb-10"
            />
        </section>
    </div>
</template>

<script setup>

    const textAbout = ref([
        {
            id: 0,
            label: 'Giselle Rodrigues',
            text: 'A inquietação e o gosto pela diversidade não se tornaram uma marca do trabalho Giselle Rodrigues por acaso. Criada entre a solidão do estudo do piano clássico e a prática de um esporte coletivo, o voleibol, a coreógrafa carioca iniciou-se na dança contemporânea como bailarina do Coringa, da uruguaia GracielaFigueiroa, grupo que marcou época no Rio de Janeiro dos anos 1980.Em 1984, a convite de Dina Sfat, atriz de contornos mitológicos na cena teatral brasileira, deu início aquela que seria a principal vertente de sua carreira nos dez anos subsequentes: diretora de movimento –ex- pressão especialmente cunhada para ela pelo encenador Ulysses Cruz para sublinhar a relevância deseu trabalho no resultado final de algumas dezenas de espetáculos de teatro com que colaborou nesteperíodo.A rubrica, que acabaria se incorporando ao jargão cênico brasileiro, aplica-se também, e com precisão,ao papel que desempenhou, por exemplo, na criação dos movimentos dos bonecos-cachorros da TV Colosso –um marco na programação televisiva infantil brasileira dos anos 1990.',
            url_img: 'https://c.superprof.com/i/a/5242675/5979227/600/20221215190836/professora-danca-com-experiencia-brasil-estados-unidos-alemanha-ballet-contemporaneo-moderno-jazz-forro-aulas.jpg',
        },
        {
            id: 1,
            label: 'CMG',
            text: 'O Centro de Movimento Giselle Rodrigues afirma sua filosofia que, através do movimento, o ser humano desenvolve seu corpo, sua inteligência, confiança, habilidade de se comunicar e expressar. Uma escola com várias técnicas de movimento e foco na integração da dança com o universo das artes em geral; conhecimento fundamental para a formação de um corpo inteligente e de uma movimentação criativa. Nosso intuito é proporcionar o encontro de pessoas que se relacionam com a dança através da arte, saúde e lazer. Atendemos crianças, adolescentes e adultos, profissionais ou iniciantes.',
            url_img: 'https://www.cultura.sp.gov.br/wp-content/uploads/2023/07/20230418_20230418_EnsaioFlashMob-Fotos-JoaoAnselmo-2021-scaled.jpg',
        }
    ])
</script>
