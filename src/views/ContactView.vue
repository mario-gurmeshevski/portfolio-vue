<template>
  <main class="container mx-auto px-4 py-8 sm:py-12 lg:py-16 max-w-4xl">
    <section class="text-center mb-12 sm:mb-16 lg:mb-20">
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
        Contact
      </h1>
      <p class="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-2">Let's connect!</p>
    </section>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
      <section class="order-2 lg:order-1">
        <h2 class="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8 text-center lg:text-left">
          Send a Message
        </h2>

        <form @submit.prevent="submitForm" class="space-y-4 sm:space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-300 mb-2"> Name </label>
            <input
              type="text"
              id="name"
              name="name"
              v-model="form.name"
              required
              class="form-input w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white/50 focus:outline-none transition-colors duration-200 min-h-[44px] touch-manipulation"
              placeholder="Your name"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-300 mb-2"> Email </label>
            <input
              type="email"
              id="email"
              name="email"
              v-model="form.email"
              required
              class="form-input w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white/50 focus:outline-none transition-colors duration-200 min-h-[44px] touch-manipulation"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              v-model="form.subject"
              required
              class="form-input w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white/50 focus:outline-none transition-colors duration-200 min-h-[44px] touch-manipulation"
              placeholder="Project inquiry"
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              v-model="form.message"
              required
              rows="5"
              class="form-input w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white/50 focus:outline-none transition-colors duration-200 resize-none min-h-[120px] touch-manipulation"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="button cursor-pointer bg-transparent text-white border border-solid border-[rgba(255, 255, 255, 0.3)] rounded-md py-3 px-6 text-sm w-full min-h-[44px] disabled:opacity-70 disabled:cursor-not-allowed touch-manipulation flex items-center justify-center"
          >
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>

        <div
          v-if="submitMessage"
          class="mt-4 p-4 rounded-lg text-sm"
          :class="
            submitStatus === 'success'
              ? 'bg-green-900/30 border border-green-500/30 text-green-300'
              : 'bg-red-900/30 border border-red-500/30 text-red-300'
          "
        >
          {{ submitMessage }}
        </div>
      </section>

      <section class="order-1 lg:order-2">
        <h2 class="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8 text-center lg:text-left">
          Get in Touch
        </h2>

        <div class="space-y-6 sm:space-y-8">
          <div
            class="bg-white/5 border border-white/10 rounded-lg p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 sm:hover:translate-y-[-2px]"
          >
            <h3 class="text-base sm:text-lg font-medium text-white mb-3 sm:mb-4">
              Contact Information
            </h3>
            <div class="space-y-3">
              <div class="flex items-center">
                <Fa6Envelope class="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-gray-400 flex-shrink-0" />
                <a
                  href="mailto:gurmesevskimario@gmail.com"
                  class="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base break-all sm:break-normal touch-manipulation"
                >
                  gurmesevskimario@gmail.com
                </a>
              </div>
              <div class="flex items-center">
                <Fa6LocationDot class="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-gray-400 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/3G8UtRQMe3xDc9DL6"
                  rel="noopener noreferrer"
                  class="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base touch-manipulation"
                  target="_blank"
                >
                  Skopje, Macedonia
                </a>
              </div>
            </div>
          </div>

          <div
            class="bg-white/5 border border-white/10 rounded-lg p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 sm:hover:translate-y-[-2px]"
          >
            <h3 class="text-base sm:text-lg font-medium text-white mb-3 sm:mb-4">Connect</h3>
            <div class="flex gap-4 justify-center lg:justify-start">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`Connect with Mario on ${social.name}`"
                class="flex items-center justify-center w-12 h-12 sm:w-10 sm:h-10 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 sm:hover:-translate-y-1 touch-manipulation"
              >
                <component :is="social.icon" class="w-5 h-5 text-gray-300" />
                <span class="sr-only">{{ social.name }}</span>
              </a>
            </div>
          </div>

          <div
            class="bg-white/5 border border-white/10 rounded-lg p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 sm:hover:translate-y-[-2px]"
          >
            <h3 class="text-base sm:text-lg font-medium text-white mb-3 sm:mb-4">Availability</h3>
            <div class="space-y-2">
              <div class="flex items-center justify-center lg:justify-start">
                <div class="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                <span class="text-gray-300 text-sm">Available</span>
              </div>
              <div class="text-gray-400 text-sm text-center lg:text-left">
                Response time: Within 24 hours
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

interface SocialLink {
  name: string
  icon: string
  url: string
}

type SubmitStatus = 'success' | 'error' | ''

const form = ref<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref<boolean>(false)
const submitMessage = ref<string>('')
const submitStatus = ref<SubmitStatus>('')

const socialLinks = ref<SocialLink[]>([
  {
    name: 'GitHub',
    icon: 'SiGithub',
    url: 'https://github.com/mario-gurmeshevski',
  },
  {
    name: 'LinkedIn',
    icon: 'SiLinkedin',
    url: 'https://www.linkedin.com/in/mario-gurmeshevski-372644291',
  },
])

const submitForm = async (): Promise<void> => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    const response = await fetch('https://formspree.io/f/xqalzjwe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    })

    if (response.ok) {
      submitMessage.value = 'Thank you! Your message has been sent successfully.'
      submitStatus.value = 'success'
      resetForm()
    } else {
      throw new Error('Form submission failed')
    }
  } catch (error) {
    submitMessage.value = 'Sorry, there was an error sending your message. Please try again.'
    submitStatus.value = 'error'
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false

    setTimeout(() => {
      submitMessage.value = ''
      submitStatus.value = ''
    }, 5000)
  }
}

const resetForm = (): void => {
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
}
</script>

<style scoped>
.form-input:focus {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2);
}

.button {
  transition: all 0.3s ease;
}

.button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 640px) {
  .button:hover {
    transform: none;
  }
}
</style>
