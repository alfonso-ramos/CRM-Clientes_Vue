<script setup>
  import { FormKit } from '@formkit/vue'
  import { useRouter} from 'vue-router'
  import ClienteService from '@/services/ClienteService';
  import RouterLink from "../components/UI/RouterLink.vue";
  import Heading from "../components/UI/Heading.vue"

  const router = useRouter()

  defineProps({
      title: {
        type: String,
      }
  })

  const handleSubmit = (data) => {
    data.estado = 1
    ClienteService.agregarCliente(data)
      .then(res => {
        router.push({name: 'listado-clientes'})
      })
      .catch(error => console.log(error))
  
  }

</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="listado-clientes">
        Volver
      </RouterLink>
    </div>

    <Heading>{{ title }}</Heading>

    <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit
          type="form"
          submit-label="Agregar cliente"
          incomplete-message='Formulario incompleto'
          @submit="handleSubmit"
        >

          <FormKit 
            type="text"
            label="Nombre"
            name="nombre"
            placeholder="Nombre de cliente"
            validation="required"
            :validation-messages="{required: 'El nombre del cliente es obligatorio'}"
            validation-visibility="submit"
          />

          <FormKit 
            type="text"
            label="Apellido"
            name="apellido"
            placeholder="Apellido de cliente"
            validation="required"
            :validation-messages="{required: 'El apellido del cliente es obligatorio'}"
            validation-visibility="submit"
          />

          <FormKit 
            type="text"
            label="Email"
            name="email"
            placeholder="Email de cliente"
            validation="required|email"
            :validation-messages="{required: 'El Email del cliente es obligatorio', email: 'Ingresa un email valido'}"
            validation-visibility="submit"
          />


          <FormKit 
            type="text"
            label="Teléfono"
            name="telefono"
            placeholder="Teléfono: XXX-XXX-XXXX"
            validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
            :validation-messages="{matches: 'El formato no es valido'}"
            validation-visibility="submit"
          />

          <FormKit 
            type="text"
            label="Empresa"
            name="empresa"
            placeholder="Empresa de cliente"
          />

          <FormKit 
            type="text"
            label="Puesto"
            name="puesto"
            placeholder="Puesto de cliente"
          />



        </FormKit>
      </div>
    </div>
  </div>
</template>

<style>
  .formkit-wrapper{
    max-width: 100%;
  }
</style>