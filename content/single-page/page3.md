---
title: Contact
id: page3
description: Nous avons tout à gagner à collaborer
order: 3
image: ../../static/uploads/contact.jpg
image_caption: Photo by Josh Spires on Unsplash
---

<form
    action="https://formspree.io/f/mzbkqdak"
    method="POST"
    class="text-gray-900 dark:text-gray-100 w-full md:w-4/5 mx-auto text-center py-16"
>
    <div class="mb-6">
        <label class="block w-full mb-1">
            Email:
        </label>
        <input
            type="text"
            id="reply_to"
            name="_replyto"
            class="w-full"
            required
        />
    </div>
    <div class="mb-4">
        <label class="block w-full mb-1">
            Message:
        </label>
        <textarea
            id="message"
            name="message"
            rows="10"
            class="w-full"
            required
        ></textarea>
    </div>
    <button type="submit" class="font-bold">Envoyer</button>
</form>