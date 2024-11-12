<template>
    <nav class="flex w-full bg-gray-700 p-5">
        <div class="flex w-full justify-between items-center">
            <ul class="flex items-center gap-4">

                <li class="flex gap-5">
                    <NuxtLink
                        v-for="item in navGateSolicitations"
                        :key="item.id"
                        :to="item.path" 
                        class=" text-white hover:text-gray-400"
                    >
                        {{ item.label }}
                    </NuxtLink>
                </li>

                <li class="relative"> 
                    <button 
                        class=" text-white hover:text-gray-400 flex items-center"
                        @click="toggleDropdown"
                    >
                        Mais
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-5 ml-1" fill="none" viewBox="0 0 1024 1024">
                            <path fill="currentColor" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496"/>
                        </svg>
                    </button>

                    <ul 
                        v-if="isDropdownOpen"
                        class="absolute mt-2 w-48 bg-white text-black shadow-lg rounded-lg z-50"
                    >
                        <li
                            v-for="item in navGateSolicitationsPlus"
                            :key="item.id"
                            class="flex p-3 hover:bg-gray-200 font-bold text-lg text-gray-700 border-gray-700"
                        >
                            <NuxtLink
                                @click="removeDropdown"
                                :to="item.path"
                                class="block"
                            >
                                {{ item.label }}
                            </NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>

    const isDropdownOpen = ref(false)

    const toggleDropdown = () => {
        isDropdownOpen.value = !isDropdownOpen.value
    }

    function removeDropdown() {
        isDropdownOpen.value = false
    }

    const navGateSolicitations = ref([
        { 
            id: 0,
            label: 'Home',
            path: '/',
        },
        { 
            id: 1,
            label: 'Sobre',
            path: '/about',
        },
    ])

    const navGateSolicitationsPlus = ref([
        { 
            id: 0,
            label: 'Nosso ensino',
            icon: '',
            path: '/school'
        },
        { 
            id: 1,
            label: 'Corpo de baile',
            icon: '',
            path: '/master'
        },
        { 
            id: 2,
            label: 'Espetáculos',
            icon: '',
            path: '/show'
        },
        { 
            id: 3,
            label: 'Novidades',
            icon: '',
            path: '/news',
        },
        { 
            id: 4,
            label: 'Contato',
            icon: '',
            path: '/home',
        },
    ])

</script>

