import { LikeVisibility } from './like_visibility';

export class AppCommentLikeVisibility implements LikeVisibility {
    public visibleLikeToClicked(): void {
        const likeBtnEls = document.getElementsByClassName('commentlist-footer-like-count-gaia') as HTMLCollectionOf<HTMLElement>;
        const likeEls = document.getElementsByClassName('commentlist-footer-like-gaia') as HTMLCollectionOf<HTMLElement>;

        for (let i = 0; i < likeEls.length; i++) {
            const likeEl = likeEls.item(i) as HTMLElement;
            if (likeEl.textContent === 'いいね！を取り消す') {
                const likeBtnEl = likeBtnEls.item(i) as HTMLElement;
                likeBtnEl.classList.add('commentlist-footer-like-count-active-gaia');
            }
        }
    }
    
    public hideLikeConts(): void {
        const likeCountEls = document.getElementsByClassName('commentlist-footer-like-count-text-gaia') as HTMLCollectionOf<HTMLElement>;
        const likeBtnEls = document.getElementsByClassName('commentlist-footer-like-count-gaia') as HTMLCollectionOf<HTMLElement>;

        for (const el of likeCountEls) {
            el.style.display = 'none';
        }

        for (const el of likeBtnEls) {
            el.classList.remove('commentlist-footer-like-count-active-gaia');
        }
    }
} 