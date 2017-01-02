using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace LinqRunner.Server.Api
{
    public class Completion
    {
        [JsonProperty(PropertyName = "text")]
        public string Text { get; set; }

        [JsonProperty(PropertyName = "displayText")]
        public string DisplayText { get; set; }

        protected bool Equals(Completion other)
        {
            return string.Equals(Text, other.Text) && string.Equals(DisplayText, other.DisplayText);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            return obj.GetType() == GetType() && Equals((Completion) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((Text?.GetHashCode() ?? 0) * 397) ^ (DisplayText?.GetHashCode() ?? 0);
            }
        }

        private sealed class CompletionComparer : Comparer<Completion>
        {
            public override int Compare(Completion x, Completion y)
            {
                if (ReferenceEquals(x, y)) return 0;
                if (ReferenceEquals(null, y)) return 1;
                if (ReferenceEquals(null, x)) return -1;
                var testComparison = string.Compare(x.Text, y.Text, StringComparison.Ordinal);
                return testComparison != 0
                    ? testComparison
                    : string.Compare(x.DisplayText, y.DisplayText, StringComparison.Ordinal);
            }
        }

        public static Comparer<Completion> Comparer { get; } = new CompletionComparer();
    }
}