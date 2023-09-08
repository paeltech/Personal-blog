<script setup>
const { data: posts } = await useFetch(
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@paulalan'
);
</script>
<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative bg-[url(../img/hero.jpg)] bg-cover bg-center bg-no-repeat"
    >
      <div
        class="
          relative
          mx-auto
          max-w-screen-xl
          px-4
          py-32
          sm:px-6
          lg:flex lg:h-screen lg:items-center lg:px-8
        "
      >
        <div class="w-1/4 absolute left-56 bottom-36">
          <p class="font-cervantis text-3xl">Hi, I'm</p>
          <h1 class="text-5xl">Paul <strong>Mandele</strong></h1>

          <p class="my-4">
            Product Manager, Innovation & Tech consultant, Father, Husband,
            Christ disciple.
          </p>
          <a href="#about" class="uppercase text-teal-600">
            Learn More about me</a
          >
        </div>
      </div>
    </section>
    <!-- End of hero section -->

    <!-- Blog section -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="w-full text-left pr-6 md:pr-4 space-y-2">
          <p class="font-cervantis text-3xl">Sparks & Nuggets</p>
          <h2 class="text-4xl">
            My thoughts, <br />
            ideas, learnings, <br />
            opinions & views
          </h2>
        </div>
        <div
          v-for="(post, index) in posts.items"
          :key="post.guid"
          class="w-full text-left space-y-2 border rounded-md"
        >
          <a :href="post.link" target="_blank">
            <div v-if="index <= 2">
              <div class="w-full">
                <img :src="post.thumbnail" :alt="post.title" />
              </div>
              <div class="p-6 md:p-4">
                <!-- <span class="text-sm text-gray-600">{{ post.pubDate }}</span> -->
                <div v-for="cat in post.categories" class="inline-flex pr-2">
                  <span
                    class="
                      inline-flex
                      rounded-md
                      bg-teal-50
                      px-2
                      py-1
                      text-xs
                      font-medium
                      text-teal-700
                      ring-1 ring-inset ring-teal-600/10
                    "
                    >{{ cat }}</span
                  >
                </div>

                <h3 class="text-2xl my-4">{{ post.title }}</h3>
                <a
                  :href="post.link"
                  target="_blank"
                  class="mt-4 uppercase text-sm text-teal-600"
                  >Read on Medium</a
                >
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
    <!-- End of Blog section -->

    <!-- blog section -->
    <!-- <div v-for="post in posts.items">
      <div style="padding-top: 16px; border: 2px" class="post">
        <div>{{ post.title }}</div>
        <p class="text-red-500">{{ post.pubDate }}</p>
        <img :src="post.thumbnail" :alt="post.title" />
        <div v-html="post.description.slice(0, 1000) + '...'"></div>
        <a :href="post.link" target="_blank">Read on Medium</a>
        <div v-for="cat in post.categories">
          <span>{{ cat }}</span>
        </div>
      </div>
    </div> -->
  </div>
</template>
<style>
@font-face {
  font-family: 'Product Sans';
  src: url('../fonts/ProductSans-Light.eot');
  src: url('../fonts/ProductSans-Light.eot?#iefix') format('embedded-opentype'),
    url('../fonts/ProductSans-Light.woff2') format('woff2'),
    url('../fonts/ProductSans-Light.woff') format('woff'),
    url('../fonts/ProductSans-Light.ttf') format('truetype'),
    url('../fonts/ProductSans-Light.svg#ProductSans-Light') format('svg');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Product Sans';
  src: url('../fonts/ProductSans-Medium.eot');
  src: url('../fonts/ProductSans-Medium.eot?#iefix') format('embedded-opentype'),
    url('../fonts/ProductSans-Medium.woff2') format('woff2'),
    url('../fonts/ProductSans-Medium.woff') format('woff'),
    url('../fonts/ProductSans-Medium.ttf') format('truetype'),
    url('../fonts/ProductSans-Medium.svg#ProductSans-Medium') format('svg');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Cervanttis';
  src: url('../fonts/CervanttisRegular.eot');
  src: url('../fonts/CervanttisRegular.eot?#iefix') format('embedded-opentype'),
    url('../fonts/CervanttisRegular.woff2') format('woff2'),
    url('../fonts/CervanttisRegular.woff') format('woff'),
    url('../fonts/CervanttisRegular.ttf') format('truetype'),
    url('../fonts/CervanttisRegular.svg#CervanttisRegular') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  font-size: 1.2rem;
}

body {
  font-family: 'Product Sans', sans-serif;
  font-weight: 300;
  line-height: 1.75;
  /* color: #24252a; */
}

.font-cervantis {
  font-family: 'Cervanttis', sans-serif;
  font-weight: normal;
}

h1,
h2,
h3 {
  font-family: 'Product Sans', sans-serif;
  font-weight: 500;
  line-height: 1.3;
}
</style>
