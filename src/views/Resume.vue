<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Ramzi syuhada</strong>, I am highly dedicated to developing Virtual Reality (VR) applications and passionate about creating innovative immersive technology experiences. 
      <br />I have a strong understanding of VR development using Unity and OpenXR, as well as technical skills in C# programming to deliver interactive and high-quality applications.
    <!---- <br />I joined the Delta Force because I thought it was Greek lessons, but I quickly adapted to this unexpected environment and became a key element.
      <br />I love teamwork, but I can also go in solo depending on the mission requirements.
      <br />
      <br />Right now I'm trying to find inner peace after I've read some personal development books. I'm looking for a monk job so if you have any opportunity feel free to 
      <router-link to="/contact">contact me</router-link>.
      <br />
      <br />Besides war, I'm passionate about firearms, martial arts, explosions, push-ups and flowers.
       -->
      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="https://drive.google.com/file/d/1PDpWl_bdYDvMGf3uwyF1-jlfpNDFAk-i/view?usp=drive_link.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/Avat-modified (1).png" alt="Photo of John" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Game Developer</h3>
      <h4>2024-Present</h4>

      <div>Design and development of games.</div>

    

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Languages</h3>
        <SkillRate name="Java" :rate="5" />
        <SkillRate name="C#" :rate="5" />
        <SkillRate name="Python" :rate="3" />
        <SkillRate name="C++" :rate="3" />
        
      </div>

      <div class="skill-set">
        <h3>Game Dev</h3>
        <SkillRate name="Unity (2023)" :rate="4" />
       
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Institut Teknologi Nasional Bandung - Present</h3>
      <h4>Computer science engineer</h4>
      <div>Specialty in multimedia & information technology
      </div>

      <h2>Languages</h2>

      <h3>Indonesia</h3>
      <div>Basic knowledge but I know lots of one-liners</div>

     


      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Video games</h3>
        <div>Some of my GOTYs: Dark Souls, Stalker, Hunt: Showdown, Into The Breach... I also ruined my teenage years on CS and Q3A.
          I love playing them, watching them, talking about them, studying them, watching studies about them, designing them...</div>

        <h3>I 🧡 Music</h3>
        <div>Music has always been my escape and motivation. Back in the day, I was lean and light, but after countless hours of dedication, 10 kilos of supplements, and 1000 daily push-ups, I transformed myself. The rhythm of life is just better with some hard work and good tunes.</div>

       

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>