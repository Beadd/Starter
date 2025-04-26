<template>
  <div class="toast toast-top toast-center">
    <Toast position="top-center" class="z-46">
      <template #container="{ message }">
        <div class="flex items-center justify-center">
          <div class="flex w-auto rounded-md">
            <div v-if="message.meta?.level === 'info'" class="alert alert-info">
              <span>{{ message.detail }}</span>
            </div>
            <div
              v-if="message.meta?.level === 'success'" class="
                alert alert-success
              "
            >
              <span>{{ message.detail }}</span>
            </div>
            <div
              v-if="message.meta?.level === 'error'" class="alert alert-error"
            >
              <span>{{ message.detail }}</span>
            </div>
          </div>
        </div>
      </template>
    </Toast>
  </div>
</template>
