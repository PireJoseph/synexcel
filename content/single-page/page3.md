---
title: Contact
id: page3
description: Nous avons tout à gagner à collaborer
image: ../../static/uploads/contact.jpg
image_caption: Photo by Josh Spires on Unsplash
---

<form
    action="https://formspree.io/f/mzbkqdak"
    method="POST"
    class="text-gray-900 dark:text-gray-100 w-96 mx-auto text-center py-16"
>
    <div class="mb-6">
        <label class="block w-full mb-1">
            Email:
        </label>
        <input
            type="text"
            id="reply_to"
            name="_replyto"
            class="w-full border"
            required
        />
    </div>
    <div class="mb-4">
        <label class="block w-full mb-1">
            Message:
        </label>
        <textarea
            id="reply_to"
            name="message"
            rows="10"
            class="w-full border"
            required
        ></textarea>
    </div>
    <button type="submit" class="font-bold">Envoyer</button>
</form>