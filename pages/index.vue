<script setup>
const { data: posts } = await useFetch(
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@paulalan'
);
</script>
<template>
  <div>
    <!-- Hero Section -->
    <section
      class="
        relative
        bg-[url(../../img/hero.jpg)] bg-cover bg-center bg-no-repeat
      "
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
        <div
          class="w-1/2 lg:w-1/4 relative lg:absolute lg:left-56 botlg:bottom-36"
        >
          <p class="font-handwritten text-3xl">Hi, I'm</p>
          <h1 class="text-3xl lg:text-5xl">Paul <strong>Mandele</strong></h1>

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
    <section
      id="about"
      class="max-w-4xl mx-auto mt-16 px-4 sm:px-6 lg:px-4 py-12"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="w-full text-left pr-6 md:pr-4 space-y-2">
          <p class="font-handwritten text-3xl">Sparks & Nuggets</p>
          <h2 class="text-4xl">
            My thoughts, <br />
            ideas, learnings, <br />
            opinions & views
          </h2>
        </div>
        <div v-for="(post, index) in posts.items" :key="post.guid">
          <a :href="post.link" target="_blank">
            <div
              v-if="index <= 2"
              class="
                w-full
                bg-white
                text-left
                space-y-2
                drop-shadow-md
                hover:drop-shadow-xl
                rounded-md
              "
            >
              <div class="w-full" v-if="post.thumbnail">
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

    <!-- Banner Section -->
    <section>
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
      ></div>
    </section>
    <!-- End of banner section -->

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
body {
  font-family: 'DM Sans', sans-serif;
  font-weight: 300;
  line-height: 1.75;
  /* color: #24252a; */
}

.font-handwritten {
  font-family: 'Reenie Beanie', sans-serif;
  font-weight: normal;
}

h1,
h2,
h3 {
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  line-height: 1.3;
}
</style>
