<template>
    <div class="meteor">
      <canvas ref="canvas" type="2d"></canvas>
    </div>
</template>

<script>
export default {
    name: 'MeteorComponent',
    mounted() {
        const canvas = this.$refs.canvas;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - 200;
        let meteors = [];
        const stars = 20;
        const addmereor = () => {
            meteors.push({
                lines: [{
                    x: Math.floor(Math.random() * canvas.width),
                    y: Math.floor(Math.random() * canvas.height * 0.7),
                }],
                life: Math.floor(Math.random() * 100 + 150),
                age: 0
            })
        }
        const init = () => {
            for (let i = 0; i < stars; i++) {
                addmereor();
            }
        }
        init();
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < meteors.length; i++) {
                const meteor = meteors[i];
                const lines = meteor.lines;
                for (let j = 0; j < lines.length; j++) {
                    ctx.fillStyle = `rgba(255, 255, 255,{{j/lines.length)}}`;
                    ctx.fillRect(lines[j].x,lines[j].y,1,1);
                }
                ctx.fillStyle = "white";
                const star = lines[lines.length - 1];
                ctx.fillRect(star.x - 1,star.y - 1,3,3);
                if(meteor.age <= meteor.life / 2) {
                    lines.push({
                        x: star.x + 1,
                        y: star.y + 0.3
                    });
                }else {
                    lines.shift();
                }
                meteor.age++;
                if(meteor.age >= meteor.life) {
                    meteors.splice(i,1);
                    addmereor();
                }
            }
        }
        setInterval(draw,10);  
    }
}
</script>

<style scoped>
    .meteor {
        position: fixed;
        top: 0;
        z-index: -999;
    }
</style>