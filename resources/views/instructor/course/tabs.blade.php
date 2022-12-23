<ul class="nav nav-tabs mb-4">
    <li class="nav-item">
        <a class="nav-link py-1 {{ request()->is('instructor-course-info*') ? 'active' : '' }}" href="@if($course->id) {{ route('instructor.course.info.edit', $course->id) }} @else {{ route('instructor.course.info') }} @endif">{!! Lang::get('curriculum.Course_Info')!!}</a>
    </li>
    <li class="nav-item">
        <a class="nav-link py-1 {{ request()->is('instructor-course-image*') ? 'active' : '' }} @if(!$course->id) {{ 'course-id-empty' }} @endif" href="@if($course->id) {{ route('instructor.course.image.edit', $course->id) }} @else {{ 'javascript:void();' }} @endif">{!! Lang::get('curriculum.course_image')!!}</a>
    </li>
    <li class="nav-item">
        <a class="nav-link py-1 {{ request()->is('instructor-course-video*') ? 'active' : '' }} @if(!$course->id) {{ 'course-id-empty' }} @endif" href="@if($course->id) {{ route('instructor.course.video.edit', $course->id) }} @else {{ 'javascript:void();' }} @endif">{!! Lang::get('curriculum.Promo_Video')!!}</a>
    </li>
    <li class="nav-item">
        <a class="nav-link py-1 {{ request()->is('instructor-course-curriculum*') ? 'active' : '' }} @if(!$course->id) {{ 'course-id-empty' }} @endif" href="@if($course->id) {{ route('instructor.course.curriculum.edit', $course->id) }} @else {{ 'javascript:void();' }} @endif">{!! Lang::get('curriculum.Curriculum')!!}</a>
    </li>
</ul>