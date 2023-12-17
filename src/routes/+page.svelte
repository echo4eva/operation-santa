<script>
    import { goto } from "$app/navigation";
    import { redirect } from "@sveltejs/kit";

    // interactions with combo input
    function numTree(e) {
        // prevent applying more than 1 number
        if (e.target.value.length > e.target.maxLength) {
            e.target.value = e.target.value.slice(0, e.target.maxLength)
            return
        }

        // if delete go back
        if (e.target.value.length === 0) {
            if (e.target.previousElementSibling) {
                e.target.previousElementSibling.focus()
                return
            }
            return
        }

        // when user inputs a number, go to next 
        if (e.target.nextElementSibling) {
            e.target.nextElementSibling.focus()
            return
        }
    }

    let form

    async function submitCombo(event) {
        const formEl = event.target
        const data = new FormData(formEl)

        const response = await fetch(formEl.action, {
            method: "POST",
            body: data
        })

        const responseData = await response.json()
        console.log(responseData)
        form = responseData

        formEl.reset()

        if (form.success == true) {
            goto("/gift")
        }   
    }
</script>

<div class="flex flex-col min-h-screen justify-center items-center">
    <form on:submit|preventDefault={submitCombo} 
        method="POST"
    >
        <div class="flex flex-row gap-2"> 
            <input type="number" name="i1" on:input={numTree} maxlength="1" />
            <input type="number" name= "i2" on:input={numTree} maxlength="1" />
            <input type="number" name="i3" on:input={numTree} maxlength="1" />
            <input type="number" name="i4" on:input={numTree} maxlength="1" />
        </div>
        <div class="flex pt-6 justify-center">
            <button type="submit" class="border p-2 rounded active:border-pink-400">Submit</button>
        </div>
    </form>
</div>

<style lang="postcss">
    input {
        border: 1px solid gainsboro;
        border-radius: 10px;
        width: 2rem;
        text-align: center;
        height: 100px;
        width: 100px;
        font-size: 30px;
    }
    
    @media screen and (max-width: 400px) {
        input {
            height: 60px;
            width: 60px;
        }
    }


    input:focus {
        outline: 1px solid rgb(244 114 182);
        border: 0px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>